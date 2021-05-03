import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3001Component } from './test-component3001.component';

describe('TestComponent3001Component', () => {
  let component: TestComponent3001Component;
  let fixture: ComponentFixture<TestComponent3001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
