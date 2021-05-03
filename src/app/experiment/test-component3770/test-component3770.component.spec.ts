import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3770Component } from './test-component3770.component';

describe('TestComponent3770Component', () => {
  let component: TestComponent3770Component;
  let fixture: ComponentFixture<TestComponent3770Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3770Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
