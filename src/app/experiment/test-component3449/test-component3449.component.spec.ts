import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3449Component } from './test-component3449.component';

describe('TestComponent3449Component', () => {
  let component: TestComponent3449Component;
  let fixture: ComponentFixture<TestComponent3449Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3449Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3449Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
