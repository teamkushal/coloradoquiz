import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2162Component } from './test-component2162.component';

describe('TestComponent2162Component', () => {
  let component: TestComponent2162Component;
  let fixture: ComponentFixture<TestComponent2162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
