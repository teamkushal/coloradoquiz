import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent903Component } from './test-component903.component';

describe('TestComponent903Component', () => {
  let component: TestComponent903Component;
  let fixture: ComponentFixture<TestComponent903Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent903Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
