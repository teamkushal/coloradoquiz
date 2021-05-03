import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3329Component } from './test-component3329.component';

describe('TestComponent3329Component', () => {
  let component: TestComponent3329Component;
  let fixture: ComponentFixture<TestComponent3329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3329Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
