import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3375Component } from './test-component3375.component';

describe('TestComponent3375Component', () => {
  let component: TestComponent3375Component;
  let fixture: ComponentFixture<TestComponent3375Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3375Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
