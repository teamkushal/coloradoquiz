import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3812Component } from './test-component3812.component';

describe('TestComponent3812Component', () => {
  let component: TestComponent3812Component;
  let fixture: ComponentFixture<TestComponent3812Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3812Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
