import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3407Component } from './test-component3407.component';

describe('TestComponent3407Component', () => {
  let component: TestComponent3407Component;
  let fixture: ComponentFixture<TestComponent3407Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3407Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
