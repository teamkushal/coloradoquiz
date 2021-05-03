import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3898Component } from './test-component3898.component';

describe('TestComponent3898Component', () => {
  let component: TestComponent3898Component;
  let fixture: ComponentFixture<TestComponent3898Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3898Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
