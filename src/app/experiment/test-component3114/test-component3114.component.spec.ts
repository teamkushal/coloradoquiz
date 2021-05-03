import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3114Component } from './test-component3114.component';

describe('TestComponent3114Component', () => {
  let component: TestComponent3114Component;
  let fixture: ComponentFixture<TestComponent3114Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3114Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3114Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
