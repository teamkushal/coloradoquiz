import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent184Component } from './test-component184.component';

describe('TestComponent184Component', () => {
  let component: TestComponent184Component;
  let fixture: ComponentFixture<TestComponent184Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent184Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent184Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
