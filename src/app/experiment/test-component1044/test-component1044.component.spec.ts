import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1044Component } from './test-component1044.component';

describe('TestComponent1044Component', () => {
  let component: TestComponent1044Component;
  let fixture: ComponentFixture<TestComponent1044Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1044Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
