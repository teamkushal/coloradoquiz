import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3618Component } from './test-component3618.component';

describe('TestComponent3618Component', () => {
  let component: TestComponent3618Component;
  let fixture: ComponentFixture<TestComponent3618Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3618Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
