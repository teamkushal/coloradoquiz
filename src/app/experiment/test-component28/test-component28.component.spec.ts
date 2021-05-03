import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent28Component } from './test-component28.component';

describe('TestComponent28Component', () => {
  let component: TestComponent28Component;
  let fixture: ComponentFixture<TestComponent28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent28Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
