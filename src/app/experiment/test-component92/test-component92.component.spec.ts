import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent92Component } from './test-component92.component';

describe('TestComponent92Component', () => {
  let component: TestComponent92Component;
  let fixture: ComponentFixture<TestComponent92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent92Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
