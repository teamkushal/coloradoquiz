import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3211Component } from './test-component3211.component';

describe('TestComponent3211Component', () => {
  let component: TestComponent3211Component;
  let fixture: ComponentFixture<TestComponent3211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3211Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
