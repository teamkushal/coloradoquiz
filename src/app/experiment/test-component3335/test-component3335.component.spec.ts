import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3335Component } from './test-component3335.component';

describe('TestComponent3335Component', () => {
  let component: TestComponent3335Component;
  let fixture: ComponentFixture<TestComponent3335Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3335Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
