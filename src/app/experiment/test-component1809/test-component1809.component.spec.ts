import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1809Component } from './test-component1809.component';

describe('TestComponent1809Component', () => {
  let component: TestComponent1809Component;
  let fixture: ComponentFixture<TestComponent1809Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1809Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
