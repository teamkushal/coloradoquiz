import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3930Component } from './test-component3930.component';

describe('TestComponent3930Component', () => {
  let component: TestComponent3930Component;
  let fixture: ComponentFixture<TestComponent3930Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3930Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
