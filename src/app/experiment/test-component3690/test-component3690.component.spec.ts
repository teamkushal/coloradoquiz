import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3690Component } from './test-component3690.component';

describe('TestComponent3690Component', () => {
  let component: TestComponent3690Component;
  let fixture: ComponentFixture<TestComponent3690Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3690Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
