import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3156Component } from './test-component3156.component';

describe('TestComponent3156Component', () => {
  let component: TestComponent3156Component;
  let fixture: ComponentFixture<TestComponent3156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
