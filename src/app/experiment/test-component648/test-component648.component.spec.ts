import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent648Component } from './test-component648.component';

describe('TestComponent648Component', () => {
  let component: TestComponent648Component;
  let fixture: ComponentFixture<TestComponent648Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent648Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
