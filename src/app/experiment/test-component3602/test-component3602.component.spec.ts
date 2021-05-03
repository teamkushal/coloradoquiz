import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3602Component } from './test-component3602.component';

describe('TestComponent3602Component', () => {
  let component: TestComponent3602Component;
  let fixture: ComponentFixture<TestComponent3602Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3602Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
