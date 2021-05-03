import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3649Component } from './test-component3649.component';

describe('TestComponent3649Component', () => {
  let component: TestComponent3649Component;
  let fixture: ComponentFixture<TestComponent3649Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3649Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
