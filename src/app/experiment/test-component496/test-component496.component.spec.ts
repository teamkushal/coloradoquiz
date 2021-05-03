import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent496Component } from './test-component496.component';

describe('TestComponent496Component', () => {
  let component: TestComponent496Component;
  let fixture: ComponentFixture<TestComponent496Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent496Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent496Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
