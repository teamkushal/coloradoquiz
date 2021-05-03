import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3610Component } from './test-component3610.component';

describe('TestComponent3610Component', () => {
  let component: TestComponent3610Component;
  let fixture: ComponentFixture<TestComponent3610Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3610Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
