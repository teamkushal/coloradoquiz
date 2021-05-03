import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3913Component } from './test-component3913.component';

describe('TestComponent3913Component', () => {
  let component: TestComponent3913Component;
  let fixture: ComponentFixture<TestComponent3913Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3913Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
