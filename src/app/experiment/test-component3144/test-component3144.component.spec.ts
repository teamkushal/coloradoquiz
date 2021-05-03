import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3144Component } from './test-component3144.component';

describe('TestComponent3144Component', () => {
  let component: TestComponent3144Component;
  let fixture: ComponentFixture<TestComponent3144Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3144Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
