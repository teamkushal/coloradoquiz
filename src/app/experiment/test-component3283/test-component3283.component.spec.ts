import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3283Component } from './test-component3283.component';

describe('TestComponent3283Component', () => {
  let component: TestComponent3283Component;
  let fixture: ComponentFixture<TestComponent3283Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3283Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3283Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
