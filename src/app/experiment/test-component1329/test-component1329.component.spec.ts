import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1329Component } from './test-component1329.component';

describe('TestComponent1329Component', () => {
  let component: TestComponent1329Component;
  let fixture: ComponentFixture<TestComponent1329Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1329Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
