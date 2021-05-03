import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3840Component } from './test-component3840.component';

describe('TestComponent3840Component', () => {
  let component: TestComponent3840Component;
  let fixture: ComponentFixture<TestComponent3840Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3840Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
