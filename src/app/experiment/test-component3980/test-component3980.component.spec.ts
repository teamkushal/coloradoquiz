import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3980Component } from './test-component3980.component';

describe('TestComponent3980Component', () => {
  let component: TestComponent3980Component;
  let fixture: ComponentFixture<TestComponent3980Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3980Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3980Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
