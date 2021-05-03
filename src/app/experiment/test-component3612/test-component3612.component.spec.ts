import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3612Component } from './test-component3612.component';

describe('TestComponent3612Component', () => {
  let component: TestComponent3612Component;
  let fixture: ComponentFixture<TestComponent3612Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3612Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
