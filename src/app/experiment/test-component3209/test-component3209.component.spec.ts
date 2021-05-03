import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3209Component } from './test-component3209.component';

describe('TestComponent3209Component', () => {
  let component: TestComponent3209Component;
  let fixture: ComponentFixture<TestComponent3209Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3209Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
