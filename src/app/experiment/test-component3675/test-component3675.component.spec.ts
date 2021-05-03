import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3675Component } from './test-component3675.component';

describe('TestComponent3675Component', () => {
  let component: TestComponent3675Component;
  let fixture: ComponentFixture<TestComponent3675Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3675Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3675Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
