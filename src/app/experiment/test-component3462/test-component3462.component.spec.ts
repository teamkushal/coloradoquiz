import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3462Component } from './test-component3462.component';

describe('TestComponent3462Component', () => {
  let component: TestComponent3462Component;
  let fixture: ComponentFixture<TestComponent3462Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3462Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
