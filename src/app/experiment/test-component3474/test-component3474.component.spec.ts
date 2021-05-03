import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3474Component } from './test-component3474.component';

describe('TestComponent3474Component', () => {
  let component: TestComponent3474Component;
  let fixture: ComponentFixture<TestComponent3474Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3474Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
