import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3966Component } from './test-component3966.component';

describe('TestComponent3966Component', () => {
  let component: TestComponent3966Component;
  let fixture: ComponentFixture<TestComponent3966Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3966Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
