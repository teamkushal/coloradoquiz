import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent55Component } from './test-component55.component';

describe('TestComponent55Component', () => {
  let component: TestComponent55Component;
  let fixture: ComponentFixture<TestComponent55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent55Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
