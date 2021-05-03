import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1837Component } from './test-component1837.component';

describe('TestComponent1837Component', () => {
  let component: TestComponent1837Component;
  let fixture: ComponentFixture<TestComponent1837Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1837Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
