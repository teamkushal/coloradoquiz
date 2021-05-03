import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3419Component } from './test-component3419.component';

describe('TestComponent3419Component', () => {
  let component: TestComponent3419Component;
  let fixture: ComponentFixture<TestComponent3419Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3419Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
