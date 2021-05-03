import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1685Component } from './test-component1685.component';

describe('TestComponent1685Component', () => {
  let component: TestComponent1685Component;
  let fixture: ComponentFixture<TestComponent1685Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1685Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
