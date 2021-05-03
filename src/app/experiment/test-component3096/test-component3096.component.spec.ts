import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3096Component } from './test-component3096.component';

describe('TestComponent3096Component', () => {
  let component: TestComponent3096Component;
  let fixture: ComponentFixture<TestComponent3096Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3096Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
