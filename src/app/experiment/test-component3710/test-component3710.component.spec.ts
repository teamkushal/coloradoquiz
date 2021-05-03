import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3710Component } from './test-component3710.component';

describe('TestComponent3710Component', () => {
  let component: TestComponent3710Component;
  let fixture: ComponentFixture<TestComponent3710Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3710Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
