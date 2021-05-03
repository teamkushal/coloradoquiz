import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3398Component } from './test-component3398.component';

describe('TestComponent3398Component', () => {
  let component: TestComponent3398Component;
  let fixture: ComponentFixture<TestComponent3398Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3398Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
