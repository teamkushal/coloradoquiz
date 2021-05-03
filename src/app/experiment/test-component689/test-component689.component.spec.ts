import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent689Component } from './test-component689.component';

describe('TestComponent689Component', () => {
  let component: TestComponent689Component;
  let fixture: ComponentFixture<TestComponent689Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent689Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
