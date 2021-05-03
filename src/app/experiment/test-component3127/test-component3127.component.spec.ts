import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3127Component } from './test-component3127.component';

describe('TestComponent3127Component', () => {
  let component: TestComponent3127Component;
  let fixture: ComponentFixture<TestComponent3127Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3127Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
