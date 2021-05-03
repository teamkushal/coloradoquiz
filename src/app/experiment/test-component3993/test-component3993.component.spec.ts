import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3993Component } from './test-component3993.component';

describe('TestComponent3993Component', () => {
  let component: TestComponent3993Component;
  let fixture: ComponentFixture<TestComponent3993Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3993Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
