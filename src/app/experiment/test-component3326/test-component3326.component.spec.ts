import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3326Component } from './test-component3326.component';

describe('TestComponent3326Component', () => {
  let component: TestComponent3326Component;
  let fixture: ComponentFixture<TestComponent3326Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3326Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
