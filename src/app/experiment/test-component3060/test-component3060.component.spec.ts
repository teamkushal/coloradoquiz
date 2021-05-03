import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3060Component } from './test-component3060.component';

describe('TestComponent3060Component', () => {
  let component: TestComponent3060Component;
  let fixture: ComponentFixture<TestComponent3060Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3060Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
