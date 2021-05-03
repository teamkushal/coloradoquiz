import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent610Component } from './test-component610.component';

describe('TestComponent610Component', () => {
  let component: TestComponent610Component;
  let fixture: ComponentFixture<TestComponent610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent610Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
