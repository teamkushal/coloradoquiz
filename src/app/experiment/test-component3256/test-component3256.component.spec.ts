import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3256Component } from './test-component3256.component';

describe('TestComponent3256Component', () => {
  let component: TestComponent3256Component;
  let fixture: ComponentFixture<TestComponent3256Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3256Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
